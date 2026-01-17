

const DB_NAME = 'cote-reader-cache';
const STORE_NAME = 'books';
const DB_VERSION = 1;

export interface CachedBook {
    url: string;
    data: Blob;
    timestamp: number;
}

const openDB = (): Promise<IDBDatabase> => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onerror = () => reject(request.error);
        request.onsuccess = () => resolve(request.result);

        request.onupgradeneeded = (event) => {
            const db = (event.target as IDBOpenDBRequest).result;
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME, { keyPath: 'url' });
            }
        };
    });
};

export const cacheBook = async (url: string, data: Blob): Promise<void> => {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const store = tx.objectStore(STORE_NAME);
        await new Promise((resolve, reject) => {
            const request = store.put({
                url,
                data,
                timestamp: Date.now()
            });
            request.onsuccess = () => resolve(undefined);
            request.onerror = () => reject(request.error);
        });
    } catch (error) {

    }
};

export const getCachedBook = async (url: string): Promise<Blob | null> => {
    try {
        const db = await openDB();
        const tx = db.transaction(STORE_NAME, 'readonly');
        const store = tx.objectStore(STORE_NAME);
        return new Promise((resolve, reject) => {
            const request = store.get(url);
            request.onsuccess = () => {
                const result = request.result as CachedBook | undefined;
                resolve(result ? result.data : null);
            };
            request.onerror = () => reject(request.error);
        });
    } catch (error) {

        return null;
    }
};
