import {observable, computed, autorunAsync, action} from "mobx";
import { getUsers } from './helpers';

class User {
  constructor(user) {
    // Map user to instance
    Object.keys(user).forEach(key => {
      this[key] = user[key];
    })
    // Matches spaces, hyphens, brackets and extensions
    const phoneStrip = new RegExp(/x[\d]+|[-()+ ]/, 'g');
    this.phoneValid = user.phone.replace(phoneStrip, '');
    // Crude searchable index.
    this.index = JSON.stringify(user) + this.phoneValid;
  }
}

export class UsersStore {
  @observable searchField = '';
  @observable loading;
  @observable users = {};
  @observable usersList = [];
  @observable tempList = this.usersList.slice();
  @action loadUsers() {
    this.loading = true;
    getUsers()
      .then(results => {
        results.data.forEach(user => {
          this.loading = false;
          this.users[user.id] = new User(user)
        })
        this.usersList = Object.keys(this.users);
        this.tempList = this.usersList.slice();
      })
      .catch(error => {
        this.loading = false;
        console.error(error)
      });
  }

  @action updateSearchField(e) {
    this.searchField = e.target.value;
    this.tempList = this.usersList.filter(userID => {
      return this.users[userID].index.toLowerCase().indexOf(this.searchField.toLowerCase()) !== -1;
    });
  }

  @action reverse() {
    this.usersList.forEach(user => {
      console.log(user);
    });
    this.usersList = this.usersList.reverse();
  }
}