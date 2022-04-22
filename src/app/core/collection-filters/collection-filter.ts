export interface CollectionFilter<T> {
    matches(entry: T): boolean;
}
