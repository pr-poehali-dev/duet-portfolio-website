import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import { lazy, Suspense } from "react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
  fallback?: keyof typeof dynamicIconImports;
}

const Icon = ({ name, fallback, ...props }: IconProps) => {
  try {
    const LucideIcon = lazy(dynamicIconImports[name]);

    return (
      <Suspense
        fallback={
          fallback ? (
            <Icon name={fallback} {...props} />
          ) : (
            <div
              style={{ width: props.size || 24, height: props.size || 24 }}
            />
          )
        }
      >
        <LucideIcon {...props} />
      </Suspense>
    );
  } catch {
    if (fallback) {
      return <Icon name={fallback} {...props} />;
    }
    return (
      <div style={{ width: props.size || 24, height: props.size || 24 }} />
    );
  }
};

export default Icon;
