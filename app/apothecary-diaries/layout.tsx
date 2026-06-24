"use client";

export default function ApothecaryDiariesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="apothecary-cursor-area min-h-screen">
      {/* Inject all 17 custom Maomao cursor variations globally for different contexts */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* 1. Default / Normal pointer */
        .apothecary-cursor-area,
        .apothecary-cursor-area .cursor-default {
          cursor: url('/assets/images/apothecary-diaries/maomao_normal.png') 0 0, auto;
        }
        
        /* 2. Clickable elements & Pointer classes */
        .apothecary-cursor-area a, 
        .apothecary-cursor-area button,
        .apothecary-cursor-area [role="button"],
        .apothecary-cursor-area input[type="button"],
        .apothecary-cursor-area input[type="submit"],
        .apothecary-cursor-area input[type="reset"],
        .apothecary-cursor-area .cursor-pointer {
          cursor: url('/assets/images/apothecary-diaries/maomao_link.png') 4 0, pointer;
        }
        
        /* 3. Text fields & Text hover class */
        .apothecary-cursor-area input[type="text"],
        .apothecary-cursor-area input[type="search"],
        .apothecary-cursor-area input[type="email"],
        .apothecary-cursor-area input[type="password"],
        .apothecary-cursor-area input[type="number"],
        .apothecary-cursor-area input[type="tel"],
        .apothecary-cursor-area input[type="url"],
        .apothecary-cursor-area textarea,
        .apothecary-cursor-area [contenteditable="true"],
        .apothecary-cursor-area .cursor-text {
          cursor: url('/assets/images/apothecary-diaries/maomao_text.png') 2 1, text;
        }
        
        /* 4. Alternate cursor (cursor-alias) */
        .apothecary-cursor-area .cursor-alias {
          cursor: url('/assets/images/apothecary-diaries/maomao_alternate.png') 15 0, alias;
        }
        
        /* 5. Pencil / handwriting cursor (cursor-copy) */
        .apothecary-cursor-area .cursor-copy {
          cursor: url('/assets/images/apothecary-diaries/maomao_handwriting.png') 0 0, copy;
        }
        
        /* 6. Disabled / Unavailable elements */
        .apothecary-cursor-area :disabled,
        .apothecary-cursor-area .cursor-not-allowed,
        .apothecary-cursor-area [aria-disabled="true"] {
          cursor: url('/assets/images/apothecary-diaries/maomao_unavailable.png') 0 0, not-allowed !important;
        }
        
        /* 7. Wait/Busy states */
        .apothecary-cursor-area .cursor-wait,
        .apothecary-cursor-area [aria-busy="true"] {
          cursor: url('/assets/images/apothecary-diaries/maomao_busy.png') 2 5, wait;
        }
        .apothecary-cursor-area .cursor-progress {
          cursor: url('/assets/images/apothecary-diaries/maomao_working.png') 4 1, progress;
        }
        
        /* 8. Precision / crosshair tools */
        .apothecary-cursor-area .cursor-crosshair {
          cursor: url('/assets/images/apothecary-diaries/maomao_precision.png') 0 0, crosshair;
        }
        
        /* 9. Moving/Panning elements */
        .apothecary-cursor-area .cursor-move {
          cursor: url('/assets/images/apothecary-diaries/maomao_move.png') 15 17, move;
        }
        
        /* 10. Help text/tooltips */
        .apothecary-cursor-area .cursor-help,
        .apothecary-cursor-area abbr,
        .apothecary-cursor-area acronym {
          cursor: url('/assets/images/apothecary-diaries/maomao_help.png') 0 0, help;
        }
        
        /* 11. Grid cell select */
        .apothecary-cursor-area .cursor-cell {
          cursor: url('/assets/images/apothecary-diaries/maomao_location.png') 0 0, cell;
        }
        
        /* 12. Horizontal resizing */
        .apothecary-cursor-area .cursor-ew-resize,
        .apothecary-cursor-area .cursor-col-resize {
          cursor: url('/assets/images/apothecary-diaries/maomao_horizontal.png') 15 17, ew-resize;
        }
        
        /* 13. Vertical resizing */
        .apothecary-cursor-area .cursor-ns-resize,
        .apothecary-cursor-area .cursor-row-resize {
          cursor: url('/assets/images/apothecary-diaries/maomao_vertical.png') 15 17, ns-resize;
        }
        
        /* 14. Diagonal resizes (top-left to bottom-right) */
        .apothecary-cursor-area .cursor-nwse-resize {
          cursor: url('/assets/images/apothecary-diaries/maomao_diagonal.png') 15 17, nwse-resize;
        }
        
        /* 15. Diagonal resizes (top-right to bottom-left) */
        .apothecary-cursor-area .cursor-nesw-resize {
          cursor: url('/assets/images/apothecary-diaries/maomao_diagonal_2.png') 15 17, nesw-resize;
        }
        
        /* 16. Custom Person Profile cursor */
        .apothecary-cursor-area .cursor-person {
          cursor: url('/assets/images/apothecary-diaries/maomao_person.png') 0 0, default;
        }
      `}} />
      {children}
    </div>
  );
}
