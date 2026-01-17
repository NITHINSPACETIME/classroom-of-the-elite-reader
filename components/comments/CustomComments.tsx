"use client"

import { useEffect, useState, useRef, memo } from "react"
import { X, Send, Image as ImageIcon, Bold, Italic, Link as LinkIcon, AlertTriangle, Trash2, ExternalLink, ArrowUp, ArrowDown, Smile, Command, LogOut, MessageSquare, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/context/AuthContext"
import { supabase } from "@/lib/supabase"

interface CustomCommentsProps {
    isOpen: boolean
    onClose: () => void
    volumeId: string
    chapterTitle: string
    onSignInRequest: () => void
}

interface ReactionData {
    upvotes: number
    downvotes: number
    user_reaction: 'upvote' | 'downvote' | null
}

interface Comment {
    id: string
    content: string
    created_at: string
    user_id: string
    parent_id: string | null
    profiles: {
        username: string
        avatar_url: string | null
    }
    children?: Comment[]
    reactions: ReactionData
}


function timeAgo(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now.getTime() - date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) return Math.floor(interval) + "y ago";
    interval = seconds / 2592000;
    if (interval > 1) return Math.floor(interval) + "mo ago";
    interval = seconds / 86400;
    if (interval > 1) return Math.floor(interval) + "d ago";
    interval = seconds / 3600;
    if (interval > 1) return Math.floor(interval) + "h ago";
    interval = seconds / 60;
    if (interval > 1) return Math.floor(interval) + "m ago";
    return "just now";
}

const getAvatarColor = (name: string) => {
    const colors = ['bg-red-500', 'bg-orange-500', 'bg-amber-500', 'bg-green-500', 'bg-emerald-500', 'bg-teal-500', 'bg-cyan-500', 'bg-sky-500', 'bg-blue-500', 'bg-indigo-500', 'bg-violet-500', 'bg-purple-500', 'bg-fuchsia-500', 'bg-pink-500', 'bg-rose-500'];
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
}


const CommentContent = memo(({ content }: { content: string }) => {
    const lines = content.split('\n');
    return (
        <div className="space-y-1">
            {lines.map((line, i) => {
                if (!line.trim()) return <br key={i} />;
                const parts = line.split(/(>!.*?!<|!\[.*?\]\(.*?\)|\[.*?\]\(.*?\)|https?:\/\/\S+|\*\*.*?\*\*|\*.*?\*)/g);
                return (
                    <div key={i} className="min-h-[1.2em] break-words">
                        {parts.map((part, j) => {
                            if (part.startsWith('>!') && part.endsWith('!<')) {
                                return <span key={j} className="bg-[#1e1e24] text-[#1e1e24] hover:text-gray-200 rounded px-1.5 py-0.5 cursor-pointer select-none transition-colors duration-200" title="Click to reveal spoiler">{part.slice(2, -2)}</span>
                            }
                            if (part.match(/^!\[.*?\]\(.*?\)$/)) {
                                const match = part.match(/^!\[(.*?)\]\((.*?)\)$/);
                                if (match) return <img key={j} src={match[2]} alt={match[1]} className="max-w-full rounded-md border border-[#2a2b36] my-2 max-h-[500px] object-contain bg-[#0d1117]" loading="lazy" decoding="async" />;
                            }
                            if (part.match(/^\[.*?\]\(.*?\)$/)) {
                                const match = part.match(/^\[(.*?)\]\((.*?)\)$/);
                                if (match) return <a key={j} href={match[2]} target="_blank" rel="noopener noreferrer" className="text-[#a855f7] hover:underline inline-flex items-baseline gap-0.5">{match[1]} <ExternalLink className="h-3 w-3 self-center" /></a>;
                            }
                            if (part.match(/^https?:\/\//)) {
                                return <a key={j} href={part} target="_blank" rel="noopener noreferrer" className="text-[#a855f7] hover:underline break-all">{part}</a>;
                            }
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={j} className="text-gray-100 font-bold">{part.slice(2, -2)}</strong>;
                            }
                            if (part.startsWith('*') && part.endsWith('*')) {
                                return <em key={j} className="italic text-gray-300">{part.slice(1, -1)}</em>;
                            }
                            return <span key={j}>{part}</span>;
                        })}
                    </div>
                );
            })}
        </div>
    );
});
CommentContent.displayName = "CommentContent";

const TimelineItem = ({
    comment,
    user,
    onDelete,
    onReply,
    onVote,
    replyingToId,
    submitReply,
    replyContent,
    setReplyContent,
    replyLoading,
    isChild = false,
    depth = 0
}: any) => {
    const isMe = user?.id === comment.user_id;
    const isCreator = ['nithinspacetime1', 'NITHINSPACETIME'].includes(comment.profiles?.username || '');
    const username = comment.profiles?.username?.split('@')[0] || "User";
    const avatarColor = getAvatarColor(username);
    const initials = username.substring(0, 2).toUpperCase();

    const bubbleBg = isChild ? "bg-[#161b22]" : "bg-[#161b22]";
    const headerBg = isCreator ? "bg-[#1f242c]" : "bg-[#161b22]";

    return (
        <div className={`relative flex gap-2 sm:gap-3 ${isChild ? 'mt-4' : 'mb-6'}`}>

            <div className="flex flex-col items-center flex-shrink-0 z-10 w-[32px] sm:w-[40px]">
                {comment.profiles?.avatar_url ? (
                    <img
                        src={comment.profiles.avatar_url}
                        alt={username}
                        className="h-8 w-8 sm:h-10 sm:w-10 rounded-full object-cover shadow-sm ring-1 ring-[#30363d] bg-[#161b22]"
                    />
                ) : (
                    <div className={`h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center text-white text-[10px] sm:text-[12px] font-bold shadow-sm ring-1 ring-[#30363d] ${avatarColor}`}>
                        {initials}
                    </div>
                )}
            </div>

            <div className="flex-1 min-w-0">
                <div className="border border-[#30363d] rounded-md relative group">
                    <div className="absolute top-[14px] -left-[6px] w-3 h-3 bg-[#161b22] border-l border-b border-[#30363d] transform rotate-45 hidden sm:block"></div>

                    <div className={`flex items-center justify-between px-3 py-1.5 sm:px-4 sm:py-2 border-b border-[#30363d] ${headerBg} rounded-t-md relative z-[1]`}>
                        <div className="flex items-center gap-2 overflow-hidden">
                            <span className={`text-xs sm:text-sm font-bold truncate ${isCreator ? 'text-[#e2e8f0]' : 'text-[#c9d1d9]'}`}>{username}</span>
                            <span className="text-gray-500 text-xs sm:text-sm whitespace-nowrap">{timeAgo(comment.created_at)}</span>
                            {isCreator && (
                                <span className="border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-[10px] px-1.5 py-0.5 rounded font-medium ml-2 inline-block">
                                    Creator
                                </span>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            {isMe && (
                                <button onClick={() => onDelete(comment.id)} className="text-gray-500 hover:text-red-400 p-1"><Trash2 className="h-3.5 w-3.5" /></button>
                            )}
                        </div>
                    </div>


                    <div className="p-3 sm:p-4 bg-[#0d1117] text-[#c9d1d9] text-[13px] sm:text-[14px] leading-relaxed rounded-b-md overflow-x-auto">
                        <CommentContent content={comment.content} />
                    </div>


                    <div className="px-4 py-2 bg-[#0d1117] border-t border-[#30363d] rounded-b-md flex items-center gap-4">
                        <div className="flex items-center gap-0.5 border border-[#30363d] rounded-full bg-[#161b22] overflow-hidden">
                            <button onClick={() => onVote(comment.id, 'upvote')} className={`px-2 py-1 text-xs hover:bg-[#21262d] transition-colors flex items-center gap-1 ${comment.reactions.user_reaction === 'upvote' ? 'text-blue-400 bg-[#21262d]' : 'text-gray-400'}`}>
                                <ArrowUp className="h-3.5 w-3.5" /> {comment.reactions.upvotes > 0 && comment.reactions.upvotes}
                            </button>
                            <div className="w-[1px] h-4 bg-[#30363d]"></div>
                            <button onClick={() => onVote(comment.id, 'downvote')} className={`px-2 py-1 text-xs hover:bg-[#21262d] transition-colors flex items-center gap-1 ${comment.reactions.user_reaction === 'downvote' ? 'text-red-400 bg-[#21262d]' : 'text-gray-400'}`}>
                                <ArrowDown className="h-3.5 w-3.5" /> {comment.reactions.downvotes > 0 && comment.reactions.downvotes}
                            </button>
                        </div>

                        <button
                            onClick={() => onReply(replyingToId === comment.id ? null : comment.id)}
                            className="text-xs text-gray-500 hover:text-[#58a6ff] flex items-center gap-1 ml-auto"
                        >
                            <MessageSquare className="h-3.5 w-3.5" /> Reply
                        </button>
                    </div>
                </div>


                {replyingToId === comment.id && (
                    <div className="mt-3 ml-2 border border-[#30363d] rounded-md bg-[#0d1117] animate-in fade-in zoom-in-95 duration-200">

                        <div className="p-2">
                            <textarea
                                className="w-full bg-transparent text-[#c9d1d9] text-sm p-2 focus:outline-none resize-y min-h-[80px]"
                                placeholder={`Reply to @${username}...`}
                                value={replyContent}
                                onChange={(e) => setReplyContent(e.target.value)}
                                autoFocus
                            />
                            <div className="flex justify-end gap-2 mt-2">
                                <Button variant="ghost" size="sm" onClick={() => onReply(null)} className="h-7 text-xs">Cancel</Button>
                                <Button onClick={() => submitReply(comment.id)} disabled={replyLoading || !replyContent.trim()} size="sm" className="bg-[#238636] hover:bg-[#2ea043] text-white h-7 text-xs">Reply</Button>
                            </div>
                        </div>
                    </div>
                )}


                {comment.children && comment.children.length > 0 && (
                    <div className={`mt-2 pl-0 ${depth < 8 ? 'border-l-[1px] border-[#30363d]/30' : 'border-l-0'} ml-0.5`}>

                        <div className={`${depth < 8 ? 'pl-1.5' : 'pl-0'}`}>
                            {comment.children.map((child: any) => (
                                <TimelineItem
                                    key={child.id}
                                    comment={child}
                                    user={user}
                                    onDelete={onDelete}
                                    onReply={onReply}
                                    onVote={onVote}
                                    replyingToId={replyingToId}
                                    submitReply={submitReply}
                                    replyContent={replyContent}
                                    setReplyContent={setReplyContent}
                                    replyLoading={replyLoading}
                                    isChild={true}
                                    depth={depth + 1}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}



export function CustomComments({ isOpen, onClose, volumeId, chapterTitle, onSignInRequest }: CustomCommentsProps) {
    const { user, signOut } = useAuth()
    const [comments, setComments] = useState<Comment[]>([])
    const [newComment, setNewComment] = useState("")
    const [loading, setLoading] = useState(false)
    const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write')
    const [sortOrder, setSortOrder] = useState<'oldest' | 'newest'>('newest')


    const [replyingToId, setReplyingToId] = useState<string | null>(null)
    const [replyContent, setReplyContent] = useState("")
    const [replyLoading, setReplyLoading] = useState(false)


    const buildCommentTree = (flatComments: any[], reactionsMap: any) => {
        const commentMap: any = {};
        const roots: any[] = [];
        flatComments.forEach(c => {
            const reaction = reactionsMap[c.id] || { upvotes: 0, downvotes: 0, user_reaction: null };
            commentMap[c.id] = { ...c, children: [], reactions: reaction };
        });
        flatComments.forEach(c => {
            if (c.parent_id) {
                if (commentMap[c.parent_id]) {
                    commentMap[c.parent_id].children.push(commentMap[c.id]);
                }
            } else {
                roots.push(commentMap[c.id]);
            }
        });
        return roots;
    };

    const fetchComments = async () => {
        const { data: commentsData } = await supabase
            .from('comments')
            .select('id, content, created_at, user_id, parent_id, profiles (username, avatar_url)')
            .eq('volume_id', volumeId)
            .eq('chapter_title', chapterTitle)
            .order('created_at', { ascending: true });

        if (!commentsData) return;

        const commentIds = commentsData.map(c => c.id);
        const { data: reactionsData } = await supabase.from('comment_reactions').select('*').in('comment_id', commentIds);

        const reactionsMap: any = {};
        if (reactionsData) {
            reactionsData.forEach((r: any) => {
                if (!reactionsMap[r.comment_id]) reactionsMap[r.comment_id] = { upvotes: 0, downvotes: 0, user_reaction: null };
                if (r.reaction_type === 'upvote') reactionsMap[r.comment_id].upvotes++;
                if (r.reaction_type === 'downvote') reactionsMap[r.comment_id].downvotes++;

                if (user && r.user_id === user.id) {
                    reactionsMap[r.comment_id].user_reaction = r.reaction_type;
                }
            });
        }

        const tree = buildCommentTree(commentsData, reactionsMap);
        const sortedRoots = tree.sort((a: any, b: any) => {
            const d1 = new Date(a.created_at).getTime()
            const d2 = new Date(b.created_at).getTime()
            return sortOrder === 'newest' ? d2 - d1 : d1 - d2
        });

        setComments(sortedRoots);
    }

    useEffect(() => {
        if (!isOpen) return;

        fetchComments();

        const channel = supabase
            .channel('public:comments_github_v3')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'comments' }, () => fetchComments())
            .on('postgres_changes', { event: '*', schema: 'public', table: 'comment_reactions' }, () => fetchComments())
            .subscribe()
        return () => { supabase.removeChannel(channel) }
    }, [isOpen, volumeId, chapterTitle, sortOrder, user?.id]);


    const handlePost = async () => {
        if (!newComment.trim()) return;
        if (!user) {
            onSignInRequest();
            return;
        }
        setLoading(true);


        const optimisticId = crypto.randomUUID();
        const optimisticComment: Comment = {
            id: optimisticId,
            content: newComment,
            created_at: new Date().toISOString(),
            user_id: user.id,
            parent_id: null,
            profiles: {
                username: user.email?.split('@')[0] || 'User',
                avatar_url: user.user_metadata?.avatar_url || null
            },
            children: [],
            reactions: { upvotes: 0, downvotes: 0, user_reaction: null }
        };

        setComments(prev => [optimisticComment, ...prev]);
        setNewComment("");

        try {
            await supabase.from('comments').insert({
                user_id: user.id,
                volume_id: volumeId,
                chapter_title: chapterTitle,
                content: optimisticComment.content,
                parent_id: null
            });
            await fetchComments();
        } catch (e) {

            setComments(prev => prev.filter(c => c.id !== optimisticId));
        } finally {
            setLoading(false);
        }
    };

    const submitReply = async (parentId: string) => {
        if (!replyContent.trim()) return;
        if (!user) {
            onSignInRequest();
            return;
        }
        setReplyLoading(true);


        const optimisticId = crypto.randomUUID();
        const optimisticReply: Comment = {
            id: optimisticId,
            content: replyContent,
            created_at: new Date().toISOString(),
            user_id: user.id,
            parent_id: parentId,
            profiles: {
                username: user.email?.split('@')[0] || 'User',
                avatar_url: user.user_metadata?.avatar_url || null
            },
            children: [],
            reactions: { upvotes: 0, downvotes: 0, user_reaction: null }
        };

        setComments(prev => {
            const addReply = (list: any[]): any[] => {
                return list.map(c => {
                    if (c.id === parentId) {
                        return { ...c, children: [...(c.children || []), optimisticReply] };
                    }
                    if (c.children) {
                        return { ...c, children: addReply(c.children) };
                    }
                    return c;
                });
            };
            return addReply(prev);
        });

        setReplyContent("");
        setReplyingToId(null);

        try {
            await supabase.from('comments').insert({
                user_id: user.id,
                volume_id: volumeId,
                chapter_title: chapterTitle,
                content: optimisticReply.content,
                parent_id: parentId
            });
            await fetchComments();
        } catch (e) {


            fetchComments();
        } finally {
            setReplyLoading(false);
        }
    };

    const handleVote = async (commentId: string, type: 'upvote' | 'downvote') => {
        if (!user) {
            onSignInRequest();
            return;
        }


        setComments(prevComments => {
            const updateRecursively = (list: any[]): any[] => {
                return list.map(c => {
                    if (c.id === commentId) {
                        const currentReaction = c.reactions.user_reaction;
                        let newUpvotes = c.reactions.upvotes;
                        let newDownvotes = c.reactions.downvotes;
                        let newReaction = null;

                        if (currentReaction === type) {

                            if (type === 'upvote') newUpvotes--;
                            if (type === 'downvote') newDownvotes--;
                        } else {

                            if (currentReaction === 'upvote') newUpvotes--;
                            if (currentReaction === 'downvote') newDownvotes--;

                            if (type === 'upvote') newUpvotes++;
                            if (type === 'downvote') newDownvotes++;
                            newReaction = type;
                        }

                        return { ...c, reactions: { upvotes: newUpvotes, downvotes: newDownvotes, user_reaction: newReaction } };
                    }
                    if (c.children) {
                        return { ...c, children: updateRecursively(c.children) };
                    }
                    return c;
                });
            };
            return updateRecursively(prevComments);
        });


        try {
            const { data: existing } = await supabase.from('comment_reactions').select('id, reaction_type').eq('user_id', user.id).eq('comment_id', commentId).single();

            if (existing) {
                if (existing.reaction_type === type) {
                    await supabase.from('comment_reactions').delete().eq('id', existing.id);
                } else {
                    await supabase.from('comment_reactions').update({ reaction_type: type }).eq('id', existing.id);
                }
            } else {
                await supabase.from('comment_reactions').insert({ user_id: user.id, comment_id: commentId, reaction_type: type });
            }
        } catch (error) {


            fetchComments();
        }
    };

    const [deleteModalOpen, setDeleteModalOpen] = useState(false)
    const [commentToDelete, setCommentToDelete] = useState<string | null>(null)

    const confirmDelete = (commentId: string) => {
        setCommentToDelete(commentId)
        setDeleteModalOpen(true)
    }

    const handleDelete = async () => {
        if (!commentToDelete) return;

        const idToDelete = commentToDelete;
        setDeleteModalOpen(false);
        setCommentToDelete(null);


        setComments(prevComments => {
            const removeRecursively = (list: any[]): any[] => {
                return list.filter(c => c.id !== idToDelete).map(c => {
                    if (c.children) {
                        return { ...c, children: removeRecursively(c.children) };
                    }
                    return c;
                });
            };
            return removeRecursively(prevComments);
        });

        try {
            const { error } = await supabase.from('comments').delete().eq('id', idToDelete);
            if (error) throw error;
        } catch (e: any) {

            alert(`Failed to delete comment: ${e.message}`);
            fetchComments();
        }
    }

    const insertMarkdown = (syntax: string) => { setNewComment(prev => prev + syntax); };

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black/60 z-[60]" onClick={onClose} />}
            <div className={`fixed right-0 top-0 bottom-0 w-full sm:w-[600px] bg-[#0d1117] border-l border-[#30363d] z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col font-sans ${isOpen ? "translate-x-0" : "translate-x-full"}`}>


                <div className="flex border-b border-[#30363d] bg-[#161b22] px-6 py-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h2 className="text-gray-100 font-bold text-lg">{comments.reduce((acc, c) => acc + 1 + (c.children?.length || 0) + (c.children?.reduce((a, b) => a + (b.children?.length || 0), 0) || 0), 0)} comments</h2>
                    </div>
                    <div className="flex bg-[#30363d] rounded-md p-0.5">
                        <button onClick={() => setSortOrder('oldest')} className={`px-3 py-1 text-xs font-medium rounded-sm transition-all ${sortOrder === 'oldest' ? 'bg-[#0d1117] text-gray-200' : 'text-gray-400'}`}>Oldest</button>
                        <button onClick={() => setSortOrder('newest')} className={`px-3 py-1 text-xs font-medium rounded-sm transition-all ${sortOrder === 'newest' ? 'bg-[#0d1117] text-gray-200' : 'text-gray-400'}`}>Newest</button>
                    </div>
                    <Button variant="ghost" size="icon" onClick={onClose} className="ml-2 text-gray-400"><X className="h-4 w-4" /></Button>
                </div>


                <div className="flex-1 overflow-y-auto px-4 py-6 custom-scrollbar bg-[#0d1117]">
                    {comments.map(comment => (
                        <TimelineItem
                            key={comment.id}
                            comment={comment}
                            user={user}
                            onDelete={confirmDelete}
                            onReply={setReplyingToId}
                            onVote={handleVote}
                            replyingToId={replyingToId}
                            submitReply={submitReply}
                            replyContent={replyContent}
                            setReplyContent={setReplyContent}
                            replyLoading={replyLoading}
                            depth={0}
                        />
                    ))}
                    {comments.length === 0 && (
                        <div className="text-center text-gray-500 py-10 opacity-50">
                            <Send className="h-10 w-10 mx-auto mb-2 text-[#30363d]" />
                            <p>No comments yet.</p>
                        </div>
                    )}
                </div>


                <div className="p-3 bg-[#0d1117] border-t border-[#30363d] z-20">
                    <div className="border border-[#30363d] rounded-md bg-[#0d1117] mb-0 relative group focus-within:ring-1 focus-within:ring-[#58a6ff]/40">

                        <div className="flex items-center gap-1 px-2 pt-1.5 border-b border-[#30363d] bg-[#161b22] rounded-t-md">
                            <button onClick={() => setActiveTab('write')} className={`px-2.5 py-1.5 text-xs font-medium rounded-t-md border border-transparent ${activeTab === 'write' ? 'bg-[#0d1117] border-[#30363d] border-b-[#0d1117] text-[#c9d1d9]' : 'text-gray-500 hover:text-gray-300'}`}>Write</button>
                            <button onClick={() => setActiveTab('preview')} className={`px-2.5 py-1.5 text-xs font-medium rounded-t-md border border-transparent ${activeTab === 'preview' ? 'bg-[#0d1117] border-[#30363d] border-b-[#0d1117] text-[#c9d1d9]' : 'text-gray-500 hover:text-gray-300'}`}>Preview</button>
                        </div>

                        <div className="bg-[#0d1117] rounded-b-md min-h-[80px] flex flex-col">
                            {activeTab === 'write' && (
                                <div className="flex items-center gap-1 border-b border-dashed border-[#30363d]/50 p-1 px-2">
                                    {[{ icon: Bold, syntax: '**bold**' }, { icon: Italic, syntax: '*italic*' }, { icon: LinkIcon, syntax: '[text](url)' }, { icon: ImageIcon, syntax: '![alt](url)' }, { icon: AlertTriangle, syntax: '>! spoiler !<' }].map(({ icon: Icon, syntax }, i) => (
                                        <button key={i} onClick={() => insertMarkdown(syntax)} className="p-1 text-gray-400 hover:text-[#58a6ff] hover:bg-[#30363d] rounded"><Icon className="h-3.5 w-3.5" /></button>
                                    ))}
                                </div>
                            )}
                            {activeTab === 'write' ? (
                                <textarea className="w-full h-full bg-transparent text-[#c9d1d9] text-sm p-3 focus:outline-none resize-y placeholder:text-gray-600 min-h-[60px]" placeholder="Leave a comment" value={newComment} onChange={(e) => setNewComment(e.target.value)} />
                            ) : (
                                <div className="p-3 text-sm text-[#c9d1d9] min-h-[60px]">{newComment.trim() ? <CommentContent content={newComment} /> : <span className="text-gray-500 italic">Nothing to preview</span>}</div>
                            )}
                            <div className="flex justify-end p-2 bg-[#0d1117] rounded-b-md">
                                <Button onClick={handlePost} disabled={loading || !newComment.trim()} size="sm" className="bg-[#238636] hover:bg-[#2ea043] text-white font-semibold h-6 px-3 text-xs">Comment</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {deleteModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80">
                    <div className="w-full max-w-sm bg-[#161b22] border border-[#30363d] rounded-lg shadow-2xl p-6 transform transition-all scale-100">
                        <h3 className="text-lg font-bold text-gray-100 mb-2">Delete Comment?</h3>
                        <p className="text-gray-400 text-sm mb-6">Are you sure you want to delete this comment? This action cannot be undone.</p>
                        <div className="flex justify-end gap-3">
                            <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={() => setDeleteModalOpen(false)}>Cancel</Button>
                            <Button variant="destructive" className="bg-red-600 hover:bg-red-700 text-white" onClick={handleDelete}>Delete</Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
