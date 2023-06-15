import { useEffect } from 'react';

import { useForm } from 'effector-forms';
import { useUnit } from 'effector-react';

import { Button, TextInput } from '@mantine/core';
import { IconQrcode } from '@tabler/icons-react';

import { View } from '@mg-control/web/shared/types';
import { EmailInput, ErrorAlert, Form, PasswordInput } from '@mg-control/web/shared/ui';

import { ActivationFormModel } from './model';

type ActivationFormProps = {
  $$model: ActivationFormModel;
};

export function ActivationForm({ $$model }: ActivationFormProps): View {
  const { submit, fields } = useForm($$model.$$form);
  const { mounted, error, isLoading } = useUnit({
    mounted: $$model.mounted,
    error: $$model.$error,
    isLoading: $$model.$isLoading,
  });

  useEffect(() => {
    mounted();
  }, [mounted]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        submit();
      }}
    >
      {error && <ErrorAlert mb="md" text={error} />}
      <TextInput
        value={fields.activationCode.value}
        onChange={(e) => fields.activationCode.onChange(e.target.value)}
        error={fields.activationCode.firstError?.errorText}
        label="Activation code"
        placeholder="Enter activation code"
        icon={<IconQrcode size="1.3rem" />}
        disabled={isLoading}
        required
      />
      <EmailInput
        mt="md"
        value={fields.email.value}
        onChange={(e) => fields.email.onChange(e.target.value)}
        error={fields.email.firstError?.errorText}
        disabled={isLoading}
      />
      <PasswordInput
        mt="md"
        value={fields.password.value}
        onChange={(e) => fields.password.onChange(e.target.value)}
        error={fields.password.firstError?.errorText}
        disabled={isLoading}
      />
      <PasswordInput
        mt="md"
        label="Confirm password"
        placeholder="Re-enter password"
        value={fields.confirmation.value}
        onChange={(e) => fields.confirmation.onChange(e.target.value)}
        error={fields.confirmation.firstError?.errorText}
        disabled={isLoading}
      />
      <Button mt="xl" type="submit" loading={isLoading}>
        Activate
      </Button>
    </Form>
  );
}
