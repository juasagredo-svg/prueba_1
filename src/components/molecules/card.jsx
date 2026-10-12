import React from 'react';
import Text from '../atoms/text';
import Image from '../atoms/image';

function CardBody({ link ,imagessrc,name, info, shortdesc }) {
  return (
    <>
      <a href={link}>
      <Image src={imagessrc}/>
      <Text variant="h1">{name}</Text>
      <Text variant="h3">{info}</Text>
      <Text variant="p">{shortdesc}</Text>
      </a>
    </>
  );
}

export default CardBody;