import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"

const NewExercise = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [trainings, setTrainings] = useState("");
  const [instruction, setInstruction] = useState("");
  };
  ;
  export default NewExercise;