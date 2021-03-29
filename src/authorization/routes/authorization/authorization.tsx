import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Center, FormControl, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { AuthorizationProps } from "#/authorization/routes/authorization/types";
import { HelperText } from "#/core/components/helper-text/helper-text";

export function Authorization({ values, errors, isLoading, isValid, onChange, onSubmit }: AuthorizationProps) {
  return (
    <Center h="100%" w="100vw">
      <Box bgColor="background.500" w="30vw" h="auto" boxShadow="base" p="6" rounded="md">
        <Stack spacing="6">
          <Text fontWeight="semibold">Animestream</Text>
          <FormControl isInvalid={!!errors.email}>
            <Input
              name="email"
              type="email"
              placeholder="E-mail"
              variant="filled"
              focusBorderColor="animestream.500"
              size="lg"
              value={values.email}
              onChange={onChange("email")}
              disabled={isLoading}
            />
            <HelperText isError={!!errors.email}>
              {errors.email ?? "The same email you used during your registration."}
            </HelperText>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <Input
              name="password"
              type="password"
              placeholder="Password"
              variant="filled"
              focusBorderColor="animestream.500"
              size="lg"
              value={values.password}
              onChange={onChange("password")}
              disabled={isLoading}
            />
            <HelperText isError={!!errors.password}>
              {errors.password ?? "The same password you used during your registration."}
            </HelperText>
          </FormControl>
          <Stack direction="row" spacing="6">
            <Button
              colorScheme="animestream"
              rightIcon={<ArrowForwardIcon />}
              flex="1"
              onClick={() => onSubmit()}
              disabled={!isValid}
              isLoading={isLoading}
            >
              Enter
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
}
