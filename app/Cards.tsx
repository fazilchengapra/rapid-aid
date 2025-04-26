import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Card, Inset, Text } from "@radix-ui/themes";
import {
  faTruckMedical,
  faMagnifyingGlass,
  faHospital,
  faUserDoctor,
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const sections = [
    { title: "Find Nearest Ambulances", icon: faTruckMedical, description: "Click here to find the nearest ambulance service in your area" },
    { title: "Find Nearest Hospitals", icon: faHospital, description: "Click here to find the nearest hospital service in your area" },
    {title: "Find Doctors", icon: faUserDoctor, description: "Click here to find the nearest doctor service in your area" },
]

const Cards = () => {
  return (
    <div className="mx-5 md:mx-32 mt-10">
      <div className="md:grid lg:grid-cols-9 md:grid-cols-6 m-auto max-w-5xl flex flex-col gap-5  md:flex-none">
        {sections.map((section, index) => (
          <div key={index} className="md:col-span-3">
            <Card size="1">
              <Inset
                clip="padding-box"
                side="top"
                pb="current"
                className="py-2"
              >
                <FontAwesomeIcon
                  className="size-16 m-auto"
                  color="#155dfc "
                  icon={section.icon}
                />
              </Inset>
              <p className="text-lg font-semibold text-center">
                {section.title}
              </p>
              <Text
                as="p"
                size="3"
                className="!text-sm text-gray-500 text-center"
              >
                {section.description}
              </Text>
              <div className="mt-5 w-fit m-auto">
                <Button color={"cyan"} variant="soft">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="size-4"
                  />{" "}
                  Find
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
