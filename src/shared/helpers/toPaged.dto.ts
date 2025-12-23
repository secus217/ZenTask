import { PageResponseDto } from '../dto/page-response.dto';

export function toPagedDto<T>(
  data: T[],
  page: number,
  limit: number,
  total: number,
): PageResponseDto<T> {
  return { data, page, limit, total, totalPage: Math.ceil(total / limit) };
}
