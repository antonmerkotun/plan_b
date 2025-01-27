import styles from '@/components/ui/Button/Button.module.scss';

const Button = ({
  name,
  type = 'primary',
  className = '',
  onClick,
  ...props
}) => {
  const buttonClass = `${styles.btn} ${styles[`btn--${type}`]} ${className}`;

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {name}
    </button>
  );
};

export default Button;
