// Implement the SocialNetwork class here
class SocialNetwork {
  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    this.currentID++;
    this.users[this.currentID] = { id: this.currentID, name: name };
    this.follows[this.currentID] = new Set();
    return this.currentID;
  }

  getUser(userID) {
    return userID in this.users ? this.users[userID] : null;
  }

  follow(userID1, userID2) {
    if (this.getUser(userID2)) {
      this.follows[userID1].add(userID2);
      return true;
    }
    return false;
  }

  getFollows(userID) {
    return this.follows[userID];
  }

  getFollowers(userID) {
    let followers = new Set();
    for (const followsId in this.follows) {
      if (this.follows[followsId].has(userID)) {
        followers.add(parseInt(followsId));
      }
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    let queue = [[userID]];
    let visited = new Set();
    const recommended = [];
    let degree = 0;

    while (degree <= degrees) {
      let currentPath = queue.shift();
      let currNode = currentPath[currentPath.length - 1];

      this.getFollows(currNode).forEach((follow) => {
        if (!visited.has(follow)) {
          visited.add(follow);
          Array.isArray(recommended[degree])
            ? recommended[degree].push(follow)
            : (recommended[degree] = [follow]);
          console.log("follow: ", follow);
          console.log("concat: ", currentPath.concat(follow));
          queue.push(currentPath.concat(follow));
        }
      });
      degree++;
    }
    return recommended;
  }
}
let socialNetwork = new SocialNetwork();
userID1 = socialNetwork.addUser("User 1");
userID2 = socialNetwork.addUser("User 2");
userID3 = socialNetwork.addUser("User 3");
userID4 = socialNetwork.addUser("User 4");
userID5 = socialNetwork.addUser("User 5");
userID6 = socialNetwork.addUser("User 6");
socialNetwork.follow(1, 2);
socialNetwork.follow(2, 3);
socialNetwork.follow(3, 4);
socialNetwork.follow(3, 5);
socialNetwork.follow(4, 1);
socialNetwork.follow(4, 2);
socialNetwork.follow(5, 6);

console.log(socialNetwork.getRecommendedFollows(1, 2)); // [3, 4, 5]

module.exports = SocialNetwork;
