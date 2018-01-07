import React from 'react';
import Dialog from 'material-ui/Dialog';
import CircularProgress from 'material-ui/CircularProgress';
import FlatButton from 'material-ui/FlatButton';

export default ({ open, loading, complete, handleClose }) => {
  const actions = [<FlatButton label="okay" onClick={handleClose} />];
  return (
    <div>
      <Dialog
        title={loading ? 'Submitting...' : 'Order Complete!'}
        modal={true}
        open={open}
        actions={actions}
      >
        {loading ? <CircularProgress /> : 'Thank you for for your purchase!'}
      </Dialog>
    </div>
  );
};
