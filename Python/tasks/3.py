def is_valid_date(day, month, year):
    if year < 1:
        return False

    if month < 1 or month > 12:
        return False

    month_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    if (year % 400 == 0) or (year % 4 == 0 and year % 100 != 0):
        month_days[1] = 29

    if day < 1 or day > month_days[month - 1]:
        return False

    return True


day = int(input("Enter day: "))
month = int(input("Enter month: "))
year = int(input("Enter year: "))

if is_valid_date(day, month, year):
    print(f"{day:02d}-{month:02d}-{year} is a VALID date ✅")
else:
    print(f"{day:02d}-{month:02d}-{year} is an INVALID date ❌")
