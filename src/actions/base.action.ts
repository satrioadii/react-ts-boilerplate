class BaseActions {
  types: any;

  doSetState(payload: any) {
    return (dispatch: any) => {
      if (!this.types) throw new Error('Types not defined');
      dispatch({ type: this.types.SETSTATE, payload });
    };
  }

  doSetLoading(payload: any) {
    return (dispatch: any) => {
      if (!this.types) throw new Error('Types not defined');
      dispatch({
        type: this.types.SETLOADING,
        payload,
      });
    };
  }
}

export default BaseActions;
