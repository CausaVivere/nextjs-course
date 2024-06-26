import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CheckboxIcon,
  Divider,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";
import { useSession } from "./_provider";
import { sign } from "crypto";
import { CheckIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";

export default function SignIn() {
  const { username: name, signIn } = useSession();

  const [username, setUsername] = useState("");

  const handleSignIn = () => {
    if (!username || username.trim().length <= 0)
      return alert("Please enter a username");
    signIn(username);
  };

  return (
    <main className="flex flex-col justify-center items-center min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <Card className="max-w-screen-sm w-[420px]">
        <CardHeader className="text-3xl font-semibold text-center">
          What's your name?
        </CardHeader>
        <Divider />
        <CardBody className="my-6">
          <InputGroup>
            <InputLeftAddon>Username:</InputLeftAddon>
            <Input
              placeholder="ex. John Cena"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
        </CardBody>
        <Divider />
        <CardFooter className="w-full items-center flex justify-center">
          <Button
            onClick={() => handleSignIn()}
            leftIcon={<CheckIcon />}
            width={"300px"}
            height={"50px"}
          >
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}
