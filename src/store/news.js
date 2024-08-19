import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'


let news = (set) => ({
    news: {
        wishlist: []
    },
    toggleAddNewToWishlist: (newObj) => {

        set((state) => {
            let updatedWishlist = state.news.wishlist;
            const currNewsIndex = updatedWishlist.findIndex(news => news?.id === newObj.id);
            updatedWishlist =  currNewsIndex == -1 ? [...updatedWishlist, newObj] : updatedWishlist.filter(news => news.id !== newObj.id)
            return ({ news: { ...state.news, wishlist: updatedWishlist } })
        })
    }

})


// news = persist(news, { name: 'news' })



const useNews = create(news)

export default useNews

