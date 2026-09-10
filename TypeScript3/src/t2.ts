type MaybeName = string | null | undefined;

type NotNullableName = NonNullable<MaybeName>;

// Example usage (valid)
const validName: NotNullableName = 'Alice';

// Example usage (invalid)
const nullName: NotNullableName = null;
