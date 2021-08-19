import React from 'react';

export interface ContainerComponentInterface {
  children: any;
  fluid?: boolean;
  noPadding?: boolean;
}

const ContainerComponent = (props: ContainerComponentInterface) => {
  const { children, fluid, noPadding } = props;

  const setupClass = {
    parent: ['scopicui-cmp-container-parent'],
    content: ['scopicui-cmp-container-content'],
  };

  if (noPadding) setupClass.parent.push('no-padding');
  if (fluid) setupClass.content.push('fluid');

  const classes = { parent: setupClass.parent.join(' '), content: setupClass.content.join(' ') };

  return (
    <div className={classes.parent}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

export default ContainerComponent;
