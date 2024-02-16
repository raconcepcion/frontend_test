import { User } from "../types/user";

interface StateProps {
  usersList: User[]
  isAscending: boolean
}

interface UserSorterProps {
  state: StateProps
  action: string
}

const userSorter = ({
  state,
  action
}: UserSorterProps) => {
  const { usersList, isAscending } = state
  const sortedUsers = usersList

  switch (action) {
    case 'name':
      sortedUsers.sort((a: User, b: User) => (a.name > b.name ? 1 : -1));
      break;
    case 'email':
      sortedUsers.sort((a: User, b: User) => (a.email > b.email ? 1 : -1));
      break;
    case 'company':
      sortedUsers.sort((a: User, b: User) => (a.company.name > b.company.name ? 1 : -1));
      break;
    default:
      sortedUsers
  }

  return !isAscending
    ? sortedUsers.reverse()
    : sortedUsers;
}

export default userSorter
