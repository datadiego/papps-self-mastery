const generateUserId = () => {
    return 'user_' + Math.floor(Math.random() * 1000000);
};

export default generateUserId;
