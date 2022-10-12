import React from "react";
import styles from "../styles/Contacts.module.scss";

import { IconBrandGithub, IconBrandTwitter, IconMail } from "@tabler/icons";
import { ActionIcon, Group } from "@mantine/core";

function Contacts() {
  return (
    <>
      <nav className={styles.container}>
        <Group spacing="xs">
          <ActionIcon
            variant="filled"
            size={40}
            component="a"
            href="https://github.com/pathonscript"
          >
            <IconBrandGithub size={32} />
          </ActionIcon>

          <ActionIcon
            variant="filled"
            size={40}
            component="a"
            href="https://twitter.com/patatotota"
            color="blue"
          >
            <IconBrandTwitter size={32} />
          </ActionIcon>

          <ActionIcon
            variant="filled"
            size={40}
            component="a"
            href="mailto:pathonscript@gmail.com"
            color="red"
          >
            <IconMail size={32} />
          </ActionIcon>
        </Group>
      </nav>
    </>
  );
}

export default Contacts;