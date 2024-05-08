import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";
import "./api/axiosDefaults";
import SignUpForm from "./pages/auth/SignUpForm";
import SignInForm from "./pages/auth/SignInForm";
import PostCreateForm from "./pages/posts/PostCreateForm";
import PostPage from "./pages/posts/PostPage";
import PostsPage from "./pages/posts/PostsPage";
import { useCurrentUser } from "./contexts/CurrentUserContext";
import PostEditForm from "./pages/posts/PostEditForm";
import ProfilePage from "./pages/profiles/ProfilePage";
import UsernameForm from "./pages/profiles/UsernameForm";
import UserPasswordForm from "./pages/profiles/UserPasswordForm";
import ProfileEditForm from "./pages/profiles/ProfileEditForm";
import AiChat from "./pages/aichat/Aichat";
import EventsPage from "./pages/events/EventsPage";
import ContactForm from "./pages/contacts/ContactForm";


function App() {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";

  return (
    <div className={styles.App}>
      <NavBar /> {/* Navigation bar component */}
      <Container className={styles.Main}>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <PostsPage message="No results found. Adjust the search keyword." />
            )}
          />
          <Route
            exact
            path="/feed"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or follow a user."
                filter={`owner__followed__owner__profile=${profile_id}&`}
              />
            )}
          /> {/* Route for displaying feed posts */}
          <Route
            exact
            path="/liked"
            render={() => (
              <PostsPage
                message="No results found. Adjust the search keyword or like a post."
                filter={`likes__owner__profile=${profile_id}&ordering=-likes__created_at&`}
              /> 
            )}
          /> {/* Route for displaying liked posts */}

           {/*  routes for different pages */}
          <Route exact path="/signin" render={() => <SignInForm />} />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route exact path="/posts/create" render={() => <PostCreateForm />} />
          <Route exact path="/posts/:id" render={() => <PostPage />} />
          <Route exact path="/posts/:id/edit" render={() => <PostEditForm />} />
          <Route exact path="/profiles/:id" render={() => <ProfilePage />} />
          <Route exact path="/ai-chat" render={()=><AiChat/>}/>
          <Route exact path="/events" render={()=><EventsPage/>}/>
          <Route exact path="/contacts" render={()=><ContactForm/>}/>

          <Route
            exact
            path="/profiles/:id/edit/username"
            render={() => <UsernameForm />}
          />{/* Route for editing username */}
          <Route
            exact
            path="/profiles/:id/edit/password"
            render={() => <UserPasswordForm />}
          /> {/* Route for editing password */}
          <Route
            exact
            path="/profiles/:id/edit"
            render={() => <ProfileEditForm />}
          /> {/* Route for editing profile */}

          <Route render={() => <p>Page not found!</p>} /> {/* Route for handling page not found */}
        </Switch>
      </Container>
    </div>
  );
}

export default App;