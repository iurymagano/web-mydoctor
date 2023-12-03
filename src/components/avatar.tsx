import { Avatar, Badge } from "@nextui-org/react";
import { ReactNode } from "react";

interface AvatarProfileProps {
  size?: "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "default";
  src?: string;
  name?: string;
  className?: string;
  onClick?: () => void;
  offBorder?: boolean;
  isInvisibleBadge?: boolean;
  positionBadge?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  classNameBadge?: string;
  colorBadge?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "default";
  contentBadge?: ReactNode | string;
  showOutlineBadge?: boolean;
  sizeBadge?: "sm" | "md" | "lg";
}

export default function AvatarPerfil({
  color,
  src,
  name,
  size,
  radius,
  className,
  onClick,
  offBorder,
  isInvisibleBadge,
  positionBadge,
  classNameBadge,
  colorBadge,
  contentBadge,
  showOutlineBadge,
  sizeBadge,
}: AvatarProfileProps) {
  const colorDefault = color ?? "primary";
  const isBorder = offBorder ? false : true;
  const defaultPositionBadge = positionBadge ?? "bottom-right";
  const defaultColorBadge = colorBadge ?? "primary";
  const defaultSize = sizeBadge ?? "sm";
  return (
    <div className="flex items-center" onClick={onClick}>
      <Badge
        isOneChar
        content={contentBadge}
        color={defaultColorBadge}
        placement={defaultPositionBadge}
        className={classNameBadge}
        isInvisible={isInvisibleBadge}
        size={defaultSize}
        showOutline={showOutlineBadge}
      >
        <Avatar
          className={className}
          isBordered={isBorder}
          color={colorDefault}
          src={src}
          showFallback
          name={name}
          size={size}
          radius={radius}
        />
      </Badge>
    </div>
  );
}
