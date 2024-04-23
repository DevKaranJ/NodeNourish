import React, { useState, useEffect } from 'react';
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { fetchData } from "../../services/api/api";

const EnergyData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      console.log(result);
      setData(result);
    };

    getData();
  }, []);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "sector", headerName: "Sector" },
    { field: "topic", headerName: "Topic" },
    { field: "region", headerName: "Region" },
    { field: "country", headerName: "Country" },
    { field: "title", headerName: "Title" },
    {
      field: "detail",
      headerName: "Detail",
      sortable: false,
      width: 100,
      disableClickEventBubbling: true,
      renderCell: (params) => {
        const onClick = () => {
          const id = params.row._id;
          window.location.href = `/detail/${id}`;
        };

        return <button onClick={onClick}>Go to Detail</button>;
      },
    },
  ];

  return (
    <Box m="20px">
      <Header title="Energy Data" subtitle="Managing the Energy Data" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={data} columns={columns} getRowId={(row) => row._id} />
      </Box>
    </Box>
  );
};

export default EnergyData;