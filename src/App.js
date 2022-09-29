import React from "react";
import "./App.css";
import {
  VStack,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Flex,
  Container,
  Input,
  Select,
  Checkbox,
  Button,
} from "@chakra-ui/react";

function App() {
  return (
    <Container maxW="container.xl" p={10}>
      <Flex h="100vh" py={20}>
        <VStack w="full" h="full" p={10} spacing={10} alignItems="flex-start">
          <VStack spacing={3} alignItems="flex-start">
            <Heading size="2xl"> Your details </Heading>{" "}
            <Text> If you already have an account, click here to log In. </Text>{" "}
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={6} w="full">
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel> First Name </FormLabel> <Input placeholder="John" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel> Last Name </FormLabel> <Input placeholder="Doe" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel> address </FormLabel>{" "}
                <Input placeholder="Blvd. Broken Dreams 21" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel> City </FormLabel> <Input placeholder="New Delhi" />
              </FormControl>{" "}
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel> Country </FormLabel>{" "}
                <Select>
                  <option value="usa"> United State of America </option>{" "}
                  <option value="uae"> United Arab Emirates </option>{" "}
                  <option value="nmk"> Noth Macedonia </option>{" "}
                  <option value="de"> Germany </option>{" "}
                </Select>{" "}
              </FormControl>{" "}
            </GridItem>
            <GridItem colSpan={2}>
              <Checkbox defaultChecked> Ship to billing </Checkbox>{" "}
            </GridItem>
            <GridItem colSpan={2}>
              <Button size="lg" w="full" colorScheme="brand">
                Place Order{" "}
              </Button>{" "}
            </GridItem>{" "}
          </SimpleGrid>{" "}
        </VStack>

        <VStack
          w="full"
          h="full"
          p={10}
          spacing={10}
          alignItems="flex-start"
          bg="tomato"
        ></VStack>
      </Flex>
    </Container>
  );
}

export default App;
