import {
  Card,
  CardBody,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";
import React, { ReactNode } from "react";

const GenreSkeleton = () => {
  return (
    <HStack gap="5" paddingY="5px">
      <SkeletonCircle size="32px" />
      <Stack flex="1">
        <Skeleton height="5" />
      </Stack>
    </HStack>
  );
};

export default GenreSkeleton;
