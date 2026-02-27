import React from "react";


const name: string = "Jonathan Creamer";
const age: number = 35;
const birthday: Date = new Date(1988, 5, 18);
const hobbies: string[] = ['Xbox', 'Code'];
const me: any = {
  name,
  age,
  birthday,
  hobbies
};

type IdName = {
  id: number;
  name: string;
};

// type User = {
//   id: number;
//   name: string;
//   age: number;
//   birthday: Date;
//   hobbies?: string[];
// }

const user: User = {
  id: 1,
  name: "Jonathan Creamer",
  age: 35,
  birthday: new Date(1988, 5, 18), // lol javascript
  hobbies: ["Xbox", "Code"]
};

type AdminUser = User & {
  admin: boolean;
};

const admin: AdminUser = {
  id: 2,
  name: "Phil Coulson",
  age: 54,
  birthday: new Date(1964, 6, 8),
  hobbies: ["S.H.I.E.L.D.", "Code", "Dying", "Coming back to life", "Dying again"],
  admin: true
};

interface IdName {
  id: number;
  name: string;
}

interface User extends IdName {
  age: number;
  birthday: Date;
  hobbies: string[];
}

const user: User = {
  id: 1,
  name: "Jonathan Creamer",
  age: 35,
  birthday: new Date(1988, 5, 18), // lol javascript
  hobbies: ["Xbox", "Code"]
};

interface AdminUser extends User {
  admin: boolean;
};

const admin: AdminUser = {
  id: 2,
  name: "Phil Coulson",
  age: 54,
  birthday: new Date(1964, 6, 8),
  hobbies: ["S.H.I.E.L.D.", "Code", "Dying", "Coming back to life", "Dying again"],
  admin: true
};

// const fetchUser = (id: number) => {
//   // do fetch stuff
// };

const isItJonathansBirthday = (date: Date) => {
  return date.getMonth() === 5 && date.getDate() === 18;
};

type UserTypes = "user" | "admin" | "superadmin";

type GitHooks = "pre-commit" |
  "pre-push" | 
  "post-commit" | 
  "post-push";

const hook: GitHooks = "pre-commit";

if (hook === "pre-commit") {
  console.log("Do something");
} else if (hook === "pre-push") {
  console.log("Do something else");
} else if (hook === "post-commit") {
  console.log("Do something else");
}



const preformAction = (user: User | AdminUser) => {
  if ("admin" in user) {
    // user is AdminUser
    user.
  } else {
    // user is User
  }
};

const userHobbies = {

};

/**
 * Describes a state transition in a work item.
 */
export interface WorkItemStateTransition {
  /**
   * Gets a list of actions needed to transition to that state.
   */
  actions?: string[];
  /**
   * Name of the next state.
   */
  to?: string;
}


/**
 * Describes a work item type.
 */
export interface WorkItemType extends WorkItemTrackingResource {
  /**
   * The color.
   */
  color?: string;
  /**
   * The description of the work item type.
   */
  description?: string;

  /**
   * The icon of the work item type.
   */
  icon?: WorkItemIcon;
  /**
   * True if work item type is disabled
   */
  isDisabled?: boolean;
  /**
   * Gets the name of the work item type.
   */
  name?: string;
  /**

  /**
   * Gets the various state transition mappings in the work item type.
   */
  transitions?: Record<string, WorkItemStateTransition[]>;
}

export interface WorkItemType extends WorkItemTrackingResource {
  /**
   * Gets the various state transition mappings in the work item type.
   */
  transitions?: { [key: string] : WorkItemStateTransition[]; };
}

/**
 * Render a list of the users hobbies
 * @param user 
 * @returns 
 */
const listHobbies = (user: User) => {
  user.

  if (!user.hobbies) {
    return "";
  }

  return user.hobbies.join(", ");
};

const updateUser = (user: Partial<User>) => {
  // do update stuff
};

type SimpleUser = Pick<User, "id" | "name">;
const userDisplay: SimpleUser = {
  id: 1,
  name: "Jonathan Creamer",
};

type FetchUserReturn = ReturnType<typeof fetchUser>;

type UserComponentProps = {
  user: User;
}

/**
 * Render a user component
 * @returns 
 */
const UserComponent = (props: UserComponentProps) => {
  return <div>{props.user.name}</div>;
}

const fetchUser = (id: number): Promise<User> => {
  return fetch(`/users/${id}`)
    .then(res => res.json())
    .then(user => user as User);
}

const App = () => {
  const [user, setUser] = React.useState<User | null>(null);

  React.useEffect(() => {
    fetchUser("abc123").then(user => setUser(user));
  }, []);

  return <UserComponent user={user} />;
};

class ApplicationLogger {
  log: Logger;
  messages: string[] = [];
  
  constructor(loglevel: string, logger: Logger) {
    this.log = logger;
  }

  info(message: string) {
    this.log.info(message);
  }

  error(error: string | Error) {
    if (error instanceof Error) {
      return this.log.error(error.message);
    }
    
    this.log.error(error);
  }
}

import logger from "./logger";

const level = process.env.LOG_LEVEL || "info";

export const info = (message: string) => {
  logger.info(message);
}

export const error = (message: string | Error) => {
  if (message instanceof Error) {
    return logger.error(message.message);
  }
  
  logger.error(message);
}

interface Window {
  Office: any;
  __initialState__: any;
}

interface User extends IdName {
  age: number;
  birthday: Date;
  hobbies: string[];
}

interface User {
  preferences: [];
}

const myUser = {
  id: 1,
  name: "Jonathan Creamer",
  age: 35,
  birthday: new Date(1988, 5, 18), // lol javascript
  hobbies: ["Xbox", "Code"],
  preferences: []
} as User;

type FetchOpts = {};

interface Fetcher<T> {
    (opts?: FetchOpts): Promise<T>;
}

interface Service<T> {
    fetch: Fetcher<T>;
}

interface User {
    // ...
}

class UserService implements Service<User> {
    fetch(opts: FetchOpts = {}) {
        const user: User = {};
        return Promise.resolve(user);
    }
}
const users = new UserService();
users.fetch({});

// vs...

const userFetcher: Fetcher<User> = (opts: FetchOpts = {}) => {
    const user: User = {};
    return Promise.resolve(user);
};

enum Color {
  Red,
  Green,
  Blue
}

enum Color {
  DarkRed = 3,
  DarkGreen,
  DarkBlue
}

const button = () => {
  return <button style={{ color: Color.Red }} />;
}