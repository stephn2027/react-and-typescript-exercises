import React from "react";

type ButtonProps<E extends React.ElementType = React.ElementType> = {
  children: string;
  as?:E
};

type PrimaryButtonProps = ButtonProps & {
  primary: boolean,
  secondary?:never,
  destructive?:never,
};
type SecondaryButtonProps = ButtonProps & {
  secondary: boolean,
  destructive?:never,
  primary?:never,
};
type DestructiveButtonProps = ButtonProps & {
  destructive:boolean,
  primary?:never,
  secondary?:never,
};



const createClassNames = (classes: { [key: string]: boolean }): string => {
  let classNames = '';
  for (const [key, value] of Object.entries(classes)) {
    if (value) classNames += key + ' ';
  }
  return classNames.trim();
};
 
const defaultElement = 'button';

function Button<E extends React.ElementType = typeof defaultElement>({
  children,
  primary = false,
  secondary = false,
  destructive = false,
  as
}: (PrimaryButtonProps|SecondaryButtonProps|DestructiveButtonProps)<E>) => {
  const classNames = createClassNames({ primary, secondary, destructive });
  const TagName = as || defaultElement;
  return <button className={classNames}>{children}</button>;
};

const Application = () => {
  return (
    <main>
      <Button primary>Primary</Button>
      <Button secondary>Secondary</Button>
      <Button destructive>Destructive</Button>
    </main>
  );
};

export default Application;
