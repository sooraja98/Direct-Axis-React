// Profile.tsx
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import './Profile.scss';

interface UserProfile {
  name: string;
  email: string;
  password: string;
  avatarSrc?: string; 
}

const Profile: React.FC = () => {
  const [userProfiles, setUserProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    const userEmail = document.cookie.replace(/(?:(?:^|.*;\s*)userEmail\s*=\s*([^;]*).*$)|^.*$/, "$1");

    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
      const parsedUsers: UserProfile[] = JSON.parse(storedUsers);

      const matchedUsers = parsedUsers.filter((user) => user.email === userEmail);

      setUserProfiles(matchedUsers);
    }
  }, []);

  return (
    <Container className="profile-container">
      {userProfiles.map((userProfile, index) => (
        <Card key={index} className="profile-card">
          <Card.Body>
            <Row>
              <Col md={4}>
                <Image src={userProfile.avatarSrc || 'https://www.seekpng.com/png/small/41-410093_circled-user-icon-user-profile-icon-png.png'} alt="User Avatar" roundedCircle className="avatar" />
              </Col>
              <Col md={8} className="profile-details">
                <Card.Title>Name: {userProfile.name}</Card.Title>
                <Card.Text>Email: {userProfile.email}</Card.Text>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default Profile;
