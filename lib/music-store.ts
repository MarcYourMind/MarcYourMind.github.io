import { create } from 'zustand'

interface MusicStore {
    isPlaying: boolean
    currentSongIndex: number
    isVisible: boolean
    isMinimized: boolean
    setIsPlaying: (isPlaying: boolean) => void
    setCurrentSongIndex: (index: number) => void
    setIsVisible: (isVisible: boolean) => void
    setIsMinimized: (isMinimized: boolean) => void
    playSong: (index: number) => void
    togglePlay: () => void
}

export const useMusicStore = create<MusicStore>((set) => ({
    isPlaying: false,
    currentSongIndex: 0,
    isVisible: false,
    isMinimized: true,
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentSongIndex: (currentSongIndex) => set({ currentSongIndex }),
    setIsVisible: (isVisible) => set({ isVisible }),
    setIsMinimized: (isMinimized) => set({ isMinimized }),
    playSong: (index) => set({
        currentSongIndex: index,
        isPlaying: true,
        isVisible: true,
        isMinimized: false
    }),
    togglePlay: () => set((state) => ({ isPlaying: !state.isPlaying })),
}))
