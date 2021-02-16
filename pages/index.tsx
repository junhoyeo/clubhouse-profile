import React from 'react';
import styled from 'styled-components';

import profile from '../data/profile.json';

import ServiceWrapper from '../components/ServiceWrapper';

const Home = () => {
  return (
    <ServiceWrapper>
      <Avatar src={profile.photo_url} />
      <Name>{profile.name}</Name>
      <Username>{`@${profile.username}`}</Username>
      <FollowRow>
        <Followers>
          {profile.num_followers}
          <FollowPrefix>followers</FollowPrefix>
        </Followers>
        <Following>
          {profile.num_following}
          <FollowPrefix>following</FollowPrefix>
        </Following>
      </FollowRow>
      <Bio>{profile.bio}</Bio>
      <SocialRow>
        <Instagram>{profile.instagram}</Instagram>
        <Twitter>{profile.twitter}</Twitter>
      </SocialRow>
      <NorminationContainer>
        <NorminationProfile src={profile.invited_by_user_profile.photo_url} />
        <NorminationInformation>
          <JoinedAt>{`Joined ${profile.time_created}`}</JoinedAt>
          <NorminationText>
            {`Norminated by ${profile.invited_by_user_profile.name}`}
          </NorminationText>
        </NorminationInformation>
      </NorminationContainer>
    </ServiceWrapper>
  );
};

export default Home;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 36px;
`;

const Name = styled.h1``;

const Username = styled.h2``;

const Bio = styled.p``;

const FollowRow = styled.div``;

const Followers = styled.span``;

const Following = styled(Followers)``;

const FollowPrefix = styled.span``;

const SocialRow = styled.div``;

const Instagram = styled.span``;

const Twitter = styled(Instagram)``;

const NorminationContainer = styled.div``;

const NorminationProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 16px;
`;

const NorminationInformation = styled.div``;

const JoinedAt = styled.span``;

const NorminationText = styled.span``;
