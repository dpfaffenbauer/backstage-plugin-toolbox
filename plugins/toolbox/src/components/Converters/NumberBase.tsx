import React from 'react';
import { useStyles } from '../../utils/hooks';
import { FormControl, TextField, Typography } from '@material-ui/core';
import { PasteFromClipboardButton } from '../Buttons/PasteFromClipboardButton';
import { ClearValueButton } from '../Buttons/ClearValueButton';

export const NumberBase = () => {
  const styles = useStyles();
  const [state, setState] = React.useState({
    binary: '',
    octal: '',
    decimal: '',
    hex: '',
  });

  const handleChange = (name: string, value: string) => {
    if (value.length === 0) {
      setState({ binary: '', octal: '', decimal: '', hex: '' });
      return;
    }

    let base;
    switch (name) {
      case 'binary':
        base = parseInt(value, 2);
        break;
      case 'octal':
        base = parseInt(value, 8);
        break;
      case 'decimal':
        base = parseInt(value, 10);
        break;
      case 'hex':
        base = parseInt(value, 16);
        break;
      default:
        base = NaN;
    }

    if (isNaN(base)) {
      return;
    }

    setState({
      binary: base.toString(2),
      octal: base.toString(8),
      decimal: base.toString(10),
      hex: base.toString(16),
    });
  };

  return (
    <>
      <FormControl className={styles.fullWidth}>
        <Typography variant="subtitle1">
          Base 2 (Binary)
          <PasteFromClipboardButton setInput={v => handleChange('binary', v)} />
          <ClearValueButton setValue={() => handleChange('binary', '')} />
        </Typography>
        <TextField
          className={styles.fullWidth}
          id="binary"
          name="binary"
          value={state.binary}
          onChange={e => handleChange('binary', e.target.value)}
          variant="outlined"
        />
        <Typography variant="subtitle1">
          Base 8 (Octal)
          <PasteFromClipboardButton setInput={v => handleChange('octal', v)} />
          <ClearValueButton setValue={() => handleChange('octal', '')} />
        </Typography>
        <TextField
          className={styles.fullWidth}
          id="octal"
          name="octal"
          value={state.octal}
          onChange={e => handleChange('octal', e.target.value)}
          variant="outlined"
        />
        <Typography variant="subtitle1">
          Base 10 (Decimal)
          <PasteFromClipboardButton
            setInput={v => handleChange('decimal', v)}
          />
          <ClearValueButton setValue={() => handleChange('decimal', '')} />
        </Typography>
        <TextField
          className={styles.fullWidth}
          id="decimal"
          name="decimal"
          value={state.decimal}
          onChange={e => handleChange('decimal', e.target.value)}
          variant="outlined"
        />
        <Typography variant="subtitle1">
          Base 16 (Hex)
          <PasteFromClipboardButton setInput={v => handleChange('hex', v)} />
          <ClearValueButton setValue={() => handleChange('hex', '')} />
        </Typography>
        <TextField
          className={styles.fullWidth}
          id="hex"
          name="hex"
          value={state.hex}
          onChange={e => handleChange('hex', e.target.value)}
          variant="outlined"
        />
      </FormControl>
    </>
  );
};

export default NumberBase;
