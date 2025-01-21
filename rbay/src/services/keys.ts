export const pageCacheKey = (id: string) => `pagecache#${id}`;
export const usersKey = (userid: string) => `users#${userid}`;
export const sessionsKey = (sessionsId: string) => `sessions#${sessionsId}`;
export const itemsKey = (itemsId: string) => `items#${itemsId}`;
export const usernamesUniqueKey = () => `usernames:unique`;
export const userLikesKey = (userId: string) => `users:likes#${userId}`