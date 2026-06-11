import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const PRODUCT_PASSCODE = "BookMePLU$";

interface PasscodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void;
}

export function PasscodeDialog({ open, onOpenChange, onSuccess }: PasscodeDialogProps) {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setValue("");
      setError(false);
    }
    onOpenChange(next);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value === PRODUCT_PASSCODE) {
      setValue("");
      setError(false);
      onSuccess();
      onOpenChange(false);
    } else {
      setError(true);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-sm">
        <DialogHeader>
          <DialogTitle>Enter Passcode</DialogTitle>
          <DialogDescription>
            This section is protected. Enter the 10-character passcode to continue.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="password"
            maxLength={10}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              setError(false);
            }}
            placeholder="Passcode"
            autoFocus
          />
          {error && <p className="text-sm text-destructive">Incorrect passcode. Please try again.</p>}
          <Button type="submit" className="w-full">
            Unlock
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
