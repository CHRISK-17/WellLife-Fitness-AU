import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import TargetImage from "../assets/icons/target.png";
import EquipmentImage from "../assets/icons/equipment.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: TargetImage,
      name: target,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
  ];
  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" textTransform="capitalize">
          <span className="similar">{name}</span>
        </Typography>
        <Typography
          variant="h6"
          fontStyle="italic"
          fontWeight="100"
          sx={{ fontFamily: "Kanit" }}
        >
          Exercises keep you strong. {name} is one of the best exercises to
          target you {target}. It will help improve your mood and gain energy.
        </Typography>
        {extraDetail.map((item) => (
          <Stack key={item.name} direction="row" alignItems="center" gap="24px">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                height: "100px",
                width: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={bodyPart}
                style={{ width: "50px", height: "50px", fontFamily: "Kanit" }}
              />
            </Button>
            <Typography
              variant="h6"
              textTransform="capitalize"
              sx={{ fontFamily: "Kanit" }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
