import styled from "styled-components";
import Stories from 'react-insta-stories';
import BytecoinLogo from '../../assets/BytecoinLogo.webp'
import Teaher from '../../assets/Teacher.webp'
import Speacker from '../../assets/Speacker.webp'
import Megaphone from '../../assets/Megaphone.webp'


type Story = {
    url: string;
  };

export const StoriesPage = () => {

    const stories = [
        {
          url: "https://www.develer.com/wp-content/uploads/2019/09/React-TS_sito-1.png",
          duration: 5000,
        },
        {
            url: "https://avatars.mds.yandex.net/i?id=2d29f4839ac021807aae0f05cdbf6231ddc92a2ab1848bbf-11540573-images-thumbs&n=13",
            duration: 5000,
          },
      ];
    
      return (
        <Stories 
          stories={stories}
          width="100%"  
          height="100vh" 
        />
      );
} 