import styled from "styled-components";
export default function Character(props) {
    const {dataCharacter}= props;
    const {character,image,quote}=dataCharacter;

    return (

        
        <Contentcharacter>
          <Title>{character}</Title>  
            <ContentImage>
                <Image src={image} alt={character} />
            </ContentImage>
            <Phrase>
                {quote}
            </Phrase>
        </Contentcharacter>
    );
}

const Contentcharacter= styled.div`

padding:20px;
border:1px solid #2a9d8f;
border-radius:20px;
width:300px;
text-aling:center;
margin:10px;
&:hover{filter: brightness(40%)}
`;

const Title= styled.h2`

color:#264653;
heigth:40px;
justify-content:center;
alling-items:center;
display:flex;
`;
const ContentImage= styled.div`


heigth:250px;
display:flex;
justify-content:center;
alling-items:center;
`;

const Image= styled.img`


width:130px;
heigth:auto;
margin-rigth:20px;
`;
 const Phrase=styled.h4`

color:#2a9d8f;
heigth:100px;

`;