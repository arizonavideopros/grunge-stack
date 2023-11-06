type Props = {
    Name: string;
    Age: number;
  }
  
  export const PropComponent: React.FC<Props> = ({Name, Age}) => {
    return (
      <div>{Name} is {Age} years old</div>
    );
  }