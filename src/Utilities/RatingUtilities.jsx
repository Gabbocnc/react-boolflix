export const calculateRating = (vote_average) => {
    return Math.ceil(vote_average / 2);
};