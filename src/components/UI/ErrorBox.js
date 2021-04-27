import Card from './Card';
import Button from './Button';

import classes from './ErrorBox.module.css';

const ErrorBox = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <footer className={classes.actions}>
        <Button>Okay</Button>
      </footer>
    </Card>
  );
};

export default ErrorBox;
