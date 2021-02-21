import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import profile from '../data/profile.json';

import Message, { MessageProps } from '../components/Message';
import ServiceWrapper from '../components/ServiceWrapper';

interface Social {
  name: string;
  url: string;
  key: 'instagram' | 'twitter';
}

const Home = () => {
  const [isMessageShown, setMessageShown] = useState<boolean>(false);
  const [message, setMessage] = useState<MessageProps>({
    title: '',
  });

  const formattedJoinedDate = moment(new Date(profile.time_created)) //
    .format('MMM DD, yyyy');

  useEffect(() => {
    setMessage({
      title: '👋 Junho Yeo invited you to view his GitHub profile',
      onClickLater: () => setMessageShown(false),
      onClickOkay: () => {
        const newWindow = window.open('https://github.com/junhoyeo', '_blank');
        newWindow.focus();
        setMessageShown(false);
      },
    });
    setMessageShown(true);
  }, []);

  const onClickSocial = ({ name, url, key }: Social) => {
    if (isMessageShown) {
      return;
    }
    setMessageShown(false);
    setMessage({
      title: `👋 Thanks for clicking my ${name}!`,
    });
    setMessageShown(true);
    setTimeout(() => {
      const newWindow = window.open(`${url}/${profile[key]}`, '_blank');
      newWindow.focus();
      setMessageShown(false);
    }, 2500);
  };

  const onClickInstagram = () =>
    onClickSocial({
      name: 'Instagram',
      url: 'https://instagram.com',
      key: 'instagram',
    });

  const onClickTwitter = () =>
    onClickSocial({
      name: 'Twitter',
      url: 'https://twitter.com',
      key: 'twitter',
    });

  return (
    <ServiceWrapper>
      <Wrapper>
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
          {profile.instagram && (
            <Social onClick={onClickInstagram}>
              <InstagramLogo />
              <span>{profile.instagram}</span>
            </Social>
          )}
          {profile.twitter && (
            <Social onClick={onClickTwitter}>
              <TwitterLogo />
              <span>{profile.twitter}</span>
            </Social>
          )}
        </SocialRow>
        <NorminationContainer>
          <NorminationProfile src={profile.invited_by_user_profile.photo_url} />
          <NorminationInformation>
            <JoinedAt>{`Joined ${formattedJoinedDate}`}</JoinedAt>
            <NorminationText>
              Norminated by{' '}
              <Norminator>{profile.invited_by_user_profile.name}</Norminator>
            </NorminationText>
          </NorminationInformation>
        </NorminationContainer>
      </Wrapper>
      <Message isMessageShown={isMessageShown} {...message} />
    </ServiceWrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 52px 16px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 36px;
`;

const Name = styled.h1`
  margin: 0;
  margin-top: 20px;
  font-size: 1.2rem;
`;

const Username = styled.h2`
  margin-top: 15px;
  font-size: 0.95rem;
  font-weight: normal;
`;

const FollowRow = styled.div`
  margin-top: 27px;
`;

const Followers = styled.span`
  font-size: 1.3rem;
  font-weight: 600;
`;

const Following = styled(Followers)`
  margin-left: 36px;
`;

const FollowPrefix = styled.span`
  font-size: 1rem;
  margin-left: 4px;
  font-weight: 300;
`;

const Bio = styled.p`
  margin-top: 34px;
  white-space: pre-line;
  font-size: 1.02rem;
  font-weight: 300;
  line-height: 1.45;
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
`;

const Social = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    font-size: 0.95rem;
    line-height: 1;
    margin-left: 4px;
  }

  &:first-child {
    margin-right: 16px;
  }
`;

const SocialLogo = styled.img`
  width: 16px;
  height: 16px;
`;

const InstagramLogo = styled(SocialLogo).attrs({
  src: 'images/instagram.svg',
})``;

const TwitterLogo = styled(SocialLogo).attrs({
  src: 'images/twitter.svg',
})``;

const NorminationContainer = styled.div`
  margin-top: 45px;
  display: flex;
`;

const NorminationProfile = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 16px;
`;

const NorminationInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 12px;
`;

const JoinedAt = styled.span`
  font-size: 0.92rem;
  font-weight: 300;
`;

const NorminationText = styled(JoinedAt)`
  margin-top: 4px;
`;

const Norminator = styled.strong`
  font-weight: 600;
`;
