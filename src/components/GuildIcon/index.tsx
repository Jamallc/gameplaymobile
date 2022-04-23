import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

export function GuildIcon() {
  const uri = "https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/discord-512.png";
  return (
    <Image 
      style={styles.image}
      source={{ uri }}
      resizeMode="cover"
    />
  )
}