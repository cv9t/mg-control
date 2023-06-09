import { MouseEvent } from 'react';

import { createEvent } from 'effector';
import { Model, modelFactory } from 'effector-factorio';

import { redirect } from 'atomic-router';

import { routes } from '@mg-control/web/shared/routing';

const homePageFactory = modelFactory(() => {
  const goActivationPressed = createEvent<MouseEvent>();
  const goSignInPressed = createEvent<MouseEvent>();

  redirect({ clock: goActivationPressed, route: routes.auth.activation });
  redirect({ clock: goSignInPressed, route: routes.auth.signIn });

  return {
    goActivationPressed,
    goSignInPressed,
  };
});

export type HomePageModel = Model<typeof homePageFactory>;

export const $$homePageModel = homePageFactory.createModel();
