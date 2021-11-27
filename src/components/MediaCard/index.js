import React from "react";
import { Autocomplete } from "@material-ui/lab";
import {
  Card,
  CardContent,
  CardMedia,
  Box,
  Typography,
  TextField,
  Button
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { changeProductSlots } from "../../actions";

export default function MediaCard({
  data,
  contentSlots,
  dataProduct,
  onSetContentSlot
}) {
  const d = useDispatch();

  const mappedErrorMessage =
    data.hasError &&
    data.msg?.validationMessages.map((data) => data.validationMessages)[0];

  const onChangeContentSlot = (slot, dp) =>
    d(changeProductSlots({ id: data.imageFileName, value: slot }, dp));

  return (
    <Card
      style={{
        border: data.hasError ? "1px solid red" : "unset"
      }}
    >
      <CardContent>
        <CardMedia
          component="img"
          height="140"
          image={
            data?.imageFile
              ? URL.createObjectURL(data.imageFile)
              : data.imageUrl
          }
        />
        <p>{data.imageFileName}</p>
        {data.hasError &&
          mappedErrorMessage.map((msg, idx) => (
            <Box key={idx + msg} marginTop={idx === 0 ? 2 : 1}>
              <Typography color="secondary">{msg}</Typography>
            </Box>
          ))}
        <Autocomplete
          fullWidth
          size="small"
          options={
            Boolean(dataProduct.slot) && dataProduct.slot.length > 0
              ? contentSlots.filter(
                  (slot) =>
                    !dataProduct.slot.find((data) => data.value.id === slot.id)
                )
              : contentSlots
          }
          renderInput={(params) => (
            <TextField
              {...params}
              label="Content Slots"
              variant="outlined"
              fullWidth
            />
          )}
          getOptionLabel={(option) => option.name || ""}
          disableClearable={true}
          onChange={(_, value) => onChangeContentSlot(value, dataProduct)}
        />
        <br />
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={() => onSetContentSlot("test")}
        >
          Set Content Slot Value
        </Button>
      </CardContent>
    </Card>
  );
}
