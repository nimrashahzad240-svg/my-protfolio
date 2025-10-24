import { createSlice } from '@reduxjs/toolkit'

// there are total 9 paintings on the site and each of these below will have its own like state
const initialState = {
  paintings: {
    p1: { liked: false, count: 0, likers: [] },
    p2: { liked: false, count: 0, likers: [] },
    p3: { liked: false, count: 0, likers: [] },
    p4: { liked: false, count: 0, likers: [] },
    p5: { liked: false, count: 0, likers: [] },
    p6: { liked: false, count: 0, likers: [] },
    p7: { liked: false, count: 0, likers: [] },
    p8: { liked: false, count: 0, likers: [] },
    p9: { liked: false, count: 0, likers: [] },
  },
}

const likesSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      // action.payload = { id: 'p1', userName: 'Current User' }
      const { id, userName } = action.payload;
      const painting = state.paintings[id];
      if (!painting) return; // safety

      if (painting.liked) {
        // remove like
        painting.liked = false;
        painting.count = Math.max(painting.count - 1, 0);
        painting.likers = painting.likers.filter((n) => n !== userName)
      } else {
        painting.liked = true
        painting.count += 1
        // avoid duplicates
        if (!painting.likers.includes(userName)) painting.likers.push(userName)
      }
    },
    setLikes: (state, action) => {
      // action.payload should be the paintings object structure
      state.paintings = action.payload;
    },
  },
});

export const { toggleLike, setLikes } = likesSlice.actions;
export default likesSlice.reducer;
