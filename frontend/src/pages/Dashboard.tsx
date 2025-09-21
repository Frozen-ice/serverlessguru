import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Alert,
  CircularProgress,
  Fab,
  AppBar,
  Toolbar,
  IconButton,
} from "@mui/material";
import {
  Add as AddIcon,
  Logout as LogoutIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import ItemForm from "../components/ItemForm";
import { itemsApi } from "../services/api";
import { Item, CreateItemRequest, UpdateItemRequest } from "../types";

const Dashboard: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Item | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await itemsApi.getItems();
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  const handleCreateItem = async (data: CreateItemRequest) => {
    try {
      const newItem = await itemsApi.createItem(data);
      setItems((prev) => [newItem, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create item");
    }
  };

  const handleUpdateItem = async (data: UpdateItemRequest) => {
    if (!editingItem) return;
    
    try {
      const updatedItem = await itemsApi.updateItem(editingItem.id, data);
      setItems((prev) =>
        prev.map((item) => (item.id === editingItem.id ? updatedItem : item))
      );
      setEditingItem(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to update item");
    }
  };

  const handleDeleteItem = async (id: string) => {
    try {
      await itemsApi.deleteItem(id);
      setItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete item");
    }
  };

  const handleEditItem = (item: Item) => {
    setEditingItem(item);
    setFormOpen(true);
  };

  const handleFormClose = () => {
    setFormOpen(false);
    setEditingItem(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("cognito_token");
    navigate("/login");
  };

  if (loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <PersonIcon sx={{ mr: 2 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Serverless Guru Dashboard
          </Typography>
          <IconButton color="inherit" onClick={handleLogout}>
            <LogoutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 4 }}>
          <Typography variant="h4" component="h1">
            My Items
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {items.length} item{items.length !== 1 ? "s" : ""}
          </Typography>
        </Box>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError(null)}>
            {error}
          </Alert>
        )}

        {items.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              px: 4,
              border: "2px dashed",
              borderColor: "grey.300",
              borderRadius: 2,
            }}
          >
            <Typography variant="h6" color="text.secondary" gutterBottom>
              No items yet
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Create your first item to get started
            </Typography>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={() => setFormOpen(true)}
            >
              Create Item
            </Button>
          </Box>
        ) : (
          <Grid container spacing={2}>
            {items.map((item) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.id}>
                <ItemCard
                  item={item}
                  onEdit={handleEditItem}
                  onDelete={handleDeleteItem}
                />
              </Grid>
            ))}
          </Grid>
        )}

        <Fab
          color="primary"
          aria-label="add"
          sx={{
            position: "fixed",
            bottom: 16,
            right: 16,
          }}
          onClick={() => setFormOpen(true)}
        >
          <AddIcon />
        </Fab>

        <ItemForm
          open={formOpen}
          onClose={handleFormClose}
          onSubmit={editingItem ? handleUpdateItem : handleCreateItem}
          item={editingItem}
          title={editingItem ? "Edit Item" : "Create New Item"}
        />
      </Container>
    </>
  );
};

export default Dashboard;
