import { Container } from "postcss";
import { Helmet } from "react-helmet";


const Profile = () => {
    return (
          <div>
                   <Helmet>
                <meta charSet="utf-8" />
                <title>Update profile-carrer Hub</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <div>
            This is a Profile.This is a private route.
            One cannot see it without logging in to the page.
        </div>

        </div>
     
    );
};

export default Profile;