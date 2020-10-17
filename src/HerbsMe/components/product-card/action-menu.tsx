import React, { FC } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useDispatch } from 'react-redux';
import { herbsMeActions } from 'src/HerbsMe/redux';

interface IActionMenu {
  index: number;
}

const ActionMenu: FC<IActionMenu> = ({ index }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const openEditProductDialog = () => {
    setAnchorEl(null);
    dispatch(herbsMeActions.openEditProductDialog(index));
  };

  const openDeleteProductDialog = () => {
    setAnchorEl(null);
    dispatch(herbsMeActions.openDeleteDialog(index));
  };

  return (
    <div>
      <IconButton aria-label="more" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>

      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={openEditProductDialog}>Edit</MenuItem>
        <MenuItem onClick={openDeleteProductDialog}>Delete</MenuItem>
      </Menu>
    </div>
  );
};

export default ActionMenu;
