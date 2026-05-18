// @mis/validation-schemas — STUB.
// Production: shared Zod schemas reused by controllers + Kafka envelopes.
// PoC: trivial validators with no external deps.
export const PACKAGE = "@mis/validation-schemas";

export interface ApplicationSubmit {
  applicantName: string;
  type: string;
}

export function isApplicationSubmit(v: unknown): v is ApplicationSubmit {
  return (
    typeof v === "object" && v !== null &&
    typeof (v as any).applicantName === "string" &&
    typeof (v as any).type === "string"
  );
}

export function banner(): string {
  return `[${PACKAGE}] stub loaded`;
}
