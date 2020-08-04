const getNavigation = (user) => {

    const authLinks = [
      {
        link: "/",
        iconName: "home"
      },
      {
        link: "/create-recipe",
        iconName: "plus"
      },
      {
        link: `/logout`,
        iconName: "sign-out-alt"
      }
    ]
  
    const guestLinks = [
      {
        link: "/",
        iconName: "home"
      },
      {
        link: "/login",
        iconName: "sign-in-alt"
      }
    ]
    const loggedIn = user && user.loggedIn
    return loggedIn ? authLinks : guestLinks
  }
  
  export default getNavigation