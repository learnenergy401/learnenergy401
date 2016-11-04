class AdminReview{
    render{
        return{
            <div>
                <Dialog style={DialogStyle} open={this.state.openDialog2}>
                  <DialogTitle>Purchaser</DialogTitle>
                  <DialogContent>
                    <p></p>
                    <p>Legal Name: {user.purchasers[key_name].legalEntity}</p>
                    <p>Operating Name:</p>
                    <p>Address 1:</p>
                    <p>Address 2:</p>
                    <p>City:</p>
                    <p>Postal Code:</p>
                    <p>Province: </p>
                    <p>Country: </p>
                    <p>Postal Code:</p>
                    <p>Phone: </p>
                    <p>Fax:</p>
                    <p>Email:</p>
                    <p>Admin Contact:</p>
                    <p>Techncal Contact:</p>
                    <p>IS Number:</p>
                    <p>Website:</p>
                    <p>Password:</p>
                    <p>Role:</p>
                  </DialogContent>
                  <DialogActions>
                    <Button style= {ButtonStyle} type='button' onClick={this.handleCloseDialog2}Close</Button>
                  </DialogActions>
                </Dialog>
              </div>
             </div>
        }
    }
}